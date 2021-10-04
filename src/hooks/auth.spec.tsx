import 'jest-fetch-mock';
import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from './auth';
import { mocked } from 'ts-jest/utils';
import { startAsync } from 'expo-auth-session';
import fetchMock from 'jest-fetch-mock';


fetchMock.enableMocks();
jest.mock('expo-auth-session');


describe('Auth Hook', () => {
  it('should be able to sign in with existing google account', async () => {

    const googleMocked = mocked(startAsync as any);
    googleMocked.mockReturnValueOnce({
      type: 'success',
      params: {
        access_token: 'any_token',
      }
    });


    fetchMock.mockResponseOnce(JSON.stringify(
      {
        id: 'any_id',
        email: 'jhon.doe@rocketseat.team',
        name: 'Jhon',
        photo: 'any_photo.png'
      }
    ))
    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(() => result.current.signInWithGoogle());
    // await waitForNextUpdate();

    console.log("USER PROFILE =>", result.current.user);

    expect(result.current.user.email).toBe('jhon.doe@rocketseat.team');
  })

  it('user should not connect if cancel authentication with Google', async () => {



    const googleMocked = mocked(startAsync as any);
    googleMocked.mockReturnValue({
      type: 'cancel',
    })



    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(async () => result.current.signInWithGoogle());


    console.log("USER PROFILE =>", result.current.user);

    expect(result.current.user).not.toHaveProperty('id');
  })

  it('should be error with incorrectly google parameters', async () => {


    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    try {
      await act(async () => result.current.signInWithGoogle());
    } catch (error) {
      expect(result.current.user).toEqual({});
    }

  })
});