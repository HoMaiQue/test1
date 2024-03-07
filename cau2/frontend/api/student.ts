import http from '../src/utils/http'
export const StudentApi = {
  getAllStudent() {
    return http.get('/student')
  }
}
