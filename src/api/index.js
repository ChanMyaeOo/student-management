import axios from 'axios';

const url = 'http://localhost:5001/landing-page-d5993/us-central1/app';

export const fetchStudents = () => axios.get(`${url}/api/read`);