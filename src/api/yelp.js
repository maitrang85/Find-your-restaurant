import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer eBFjEpyMy1-Y_5gLP-SpDxbL_OQtEiKBzWxMrM9stidY2exq7jvqfW6-eDjapM_xhcpkR3Y2KqU-JSYXxy09hnQtYYlUmqfcT8KZFztXx6rlN0bE-2QB_4rK1SugYHYx'
    }

});
