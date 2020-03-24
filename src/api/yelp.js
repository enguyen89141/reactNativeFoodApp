import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer sQpVsgXTHuwXoLkdqRCOtiyp22wPB0y4TivTP7D6ctJzzaUiU76jLlVYjJopZYc_5F8cxdqPCrab31SxvZ6PxrsYOD4d6GzH02T0c-0c-VLhL-6lwiZDHLzMvMlyXnYx'
    }
});