/**
 * Reference
 * https://github.com/rrebase/cra-template-typekit/blob/master/template/src/features/counter/CounterSlice.tsx
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const sleep = (t = Math.random() * 200 + 300) => {
  return new Promise((resolve) => setTimeout(resolve, t))
}

interface InitialState {
  value: number
  loading: boolean
  error: string | null
}

export const initialState: InitialState = {
  value: 0,
  loading: false,
  error: null
}

export const fetchInitial = createAsyncThunk(
  "counter/fetchInitial",
  async (_, { rejectWithValue }) => {
    try {
      await sleep()
      const response = await axios.get("http://localhost:3000/manifest.json")
      return response.data.name.length
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
  extraReducers: {
    [fetchInitial.pending.type]: (state) => {
      state.loading = true
    },
    [fetchInitial.fulfilled.type]: (state, action) => {
      state.value = action.payload
      state.loading = false
    },
    [fetchInitial.rejected.type]: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
  }
})

export const { increment, decrement } = slice.actions

export default slice.reducer
