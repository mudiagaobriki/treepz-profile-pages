import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: [],
  allVehicleListings: [],
  vehiclesListing: [],
  filterResult: [],
  topFilters: [],
  selectedRide: {},
  useLocation: null,
  type: 'vehicle-rentals'
};

const marketplaceSlice = createSlice({
  name: 'marketplace',
  initialState,
  reducers: {
    setAddFilters(state, action) {
      state.filters = {...state.filters, ...action.payload};
    },
    setSelectedRide(state, action) {
      state.selectedRide = action.payload;
    },
    setUserLocation(state, action) {
      state.userLocation = action.payload;
    },
    setRentalType(state, action) {
      state.userLocation = action.payload;
    },
    setAllVehicleListings(state, action) {
      state.allVehicleListings = action.payload;
    },
    setRemoveFilter(state, action) {
      const indexToRemove = state.filters.index(action.payload)
      if (indexToRemove !== -1){
        state.filters = state.filters.splice(indexToRemove, 1);
      }
    },
    setApplyTopFilters(state, action) {
      state.topFilters = {...state.topFilters, ...action.payload};
    },
    setRemoveTopFilter(state, action) {
      const indexToRemove = state.topFilters.index(action.payload)
      if (indexToRemove !== -1){
        state.topFilters = state.topFilters.splice(indexToRemove, 1);
      }
    },
    setResetFilters(state, action){
      state.filters = [];
    },
    setVehiclesListing(state, action){
      state.vehiclesListing = action.payload;
    },
    setFilterResult(state, action){
      state.filterResult = action.payload;
    },
  },
});

export const { setFilterResult, setSelectedRide, setAddFilters,
  setApplyTopFilters, setRemoveTopFilter, setResetFilters,
  setRemoveFilter, setAllVehicleListings, setVehiclesListing, setRentalType, setUserLocation } = marketplaceSlice.actions;


const marketplaceReducer = marketplaceSlice.reducer;

export default marketplaceReducer;
