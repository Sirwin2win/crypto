// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'

// const initialState = {
//   news: [],
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: '',
// }

// const options = {
//   method: 'GET',
//   url: 'https://coinranking-api1.p.rapidapi.com/market-stats',
//   headers: {
//     'x-rapidapi-key': '03116c6d72msh785c9db90bbe9c9p1bc455jsnbb3af817b58d',
//     'x-rapidapi-host': 'coinranking-api1.p.rapidapi.com'
//   }
// };



// // Get user goals
// export const getNews = createAsyncThunk(
//   'news/getAll',
//   async (_, thunkAPI) => {

//     try {
//       const response = await axios.request(options);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// export const newsSlice = createSlice({
//   name: 'news',
//   initialState,
//   reducers: {
//     reset: (state) => initialState,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getNews.pending, (state) => {
//         state.isLoading = true
//       })
//       .addCase(getNews.fulfilled, (state, action) => {
//         state.isLoading = false
//         state.isSuccess = true
//         state.news = action.payload
//       })
//       .addCase(getNews.rejected, (state, action) => {
//         state.isLoading = false
//         state.isError = true
//         state.message = action.payload
//       })
//   },
// })

// export const { reset } = newsSlice.actions
// export default newsSlice.reducer
