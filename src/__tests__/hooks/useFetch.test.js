import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useFetch from '../../hooks/useFetch';

describe('useFetch', () => {
  it('should perform GET request', async () => {
    const initialValue = [];
    const mock = new MockAdapter(axios);
    const mockData = 'response';
    const url = 'http://mock';
    mock.onGet(url).reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() => useFetch(url, initialValue));

    expect(result.current.getTree).toEqual([]);
    expect(result.current.getTree).toHaveLength(0);

    await waitForNextUpdate();
    expect(result.current.getTree).toEqual('response');
  });
});
