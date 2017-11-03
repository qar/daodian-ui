import $http from '@/utils/http';

function getCurrentUser() {
  return $http.get('/api/user').then(res => res.data);
}

export default {
  getCurrentUser,
};
