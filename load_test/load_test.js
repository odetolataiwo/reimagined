import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    // Key configurations for Stress in this section
    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
    },
    stages: [
        { duration: '10s', target: 200 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
        { duration: '30s', target: 200 }, // stay at higher 200 users for 30 minutes
        { duration: '5s', target: 0 }, // ramp-down to 0 users
    ],
};

export default () => {
    const urlRes = http.get('https://reqres.in/api/users?page=2');
    check(urlRes, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
};
