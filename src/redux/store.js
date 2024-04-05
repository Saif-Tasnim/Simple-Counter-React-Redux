import {configureStore} from '@reduxjs/toolkit'
import CounterSlice from './features/counter/CounterSlice'
import { logger } from './middleware/Logger'

export const store = configureStore({
   reducer: {
      counter: CounterSlice
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})