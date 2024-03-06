import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
proxy:{
  "/api":"http://localhost:3001"  //by  using proxy here the second part will append before api and it will also help to reduce the error of CORS as we have added a proxy here the server will think that this is running on same port
}
  },
  plugins: [react()],
})
