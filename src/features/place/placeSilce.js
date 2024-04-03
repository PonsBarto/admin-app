import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import placeService from "./placeService";

export const getPlaces = createAsyncThunk(
  "place/get-places",
  async (thunkAPI) => {
    try {
      return await placeService.getPlaces();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAPlace = createAsyncThunk(
  "place/get-place",
  async (id, thunkAPI) => {
    try {
      return await placeService.getPlace(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createPlace = createAsyncThunk(
  "place/create-place",
  async (placeData, thunkAPI) => {
    try {
      return await placeService.createPlace(placeData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateAPlace = createAsyncThunk(
  "place/update-place",
  async (place, thunkAPI) => {
    try {
      return await placeService.updatePlace(place);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteAPlace = createAsyncThunk(
  "place/delete-place",
  async (id, thunkAPI) => {
    try {
      return await placeService.deletePlace(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const initialState = {
  places: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const placeSlice = createSlice({
  name: "places",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlaces.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPlaces.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.places = action.payload;
      })
      .addCase(getPlaces.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createPlace.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPlace.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdPlace = action.payload;
      })
      .addCase(createPlace.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAPlace.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAPlace.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.placeName = action.payload.title;
      })
      .addCase(getAPlace.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateAPlace.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAPlace.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedPlace = action.payload;
      })
      .addCase(updateAPlace.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteAPlace.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAPlace.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedPlace = action.payload;
      })
      .addCase(deleteAPlace.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default placeSlice.reducer;