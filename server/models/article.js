const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ideaSchema = new Schema({
    name:String,
    description:String,
    weeklyRevenue:Number,
    numWeeks:Number
  });
  
 export default mongoose.model('article', articleSchema);
   
  
//  {
//     "type_of": "article",
//     "id": 203240,
//     "title": "Start your blog with a Dev.to backend",
//     "description": "",
//     "cover_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--x1wXDXOK--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--A1UtFhw3--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/1mj5i26wfcagzuisquc7.png",
//     "readable_publish_date": "Nov 11",
//     "social_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--r6RM1gMz--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--A1UtFhw3--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/1mj5i26wfcagzuisquc7.png",
//     "tag_list": "beginners, vue, javascript",
//     "tags": [
//       "beginners",
//       "vue",
//       "javascript"
//     ],
//     "slug": "start-your-blog-with-a-dev-to-backend-13e2",
//     "path": "/codespent/start-your-blog-with-a-dev-to-backend-13e2",
//     "url": "https://dev.to/codespent/start-your-blog-with-a-dev-to-backend-13e2",
//     "canonical_url": "https://dev.to/codespent/start-your-blog-with-a-dev-to-backend-13e2",
//     "comments_count": 0,
//     "positive_reactions_count": 0,
//     "collection_id": null,
//     "created_at": "2019-11-11T02:43:22Z",
//     "edited_at": "2019-11-11T04:35:47Z",
//     "crossposted_at": null,
//     "published_at": "2019-11-11T04:09:07Z",
//     "last_comment_at": "2019-11-11T04:09:07Z",
//     "published_timestamp": "2019-11-11T04:09:07Z",
//     "user": {
//       "name": "CodeSpent",
//       "username": "codespent",
//       "twitter_username": "CodeSpent",
//       "github_username": null,
//       "website_url": "https://codespent.dev/",
//       "profile_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--mT1TUP7B--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/178244/de976252-7575-4822-aff1-bbffa007fe24.jpg",
//       "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--gp1VBpDB--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/178244/de976252-7575-4822-aff1-bbffa007fe24.jpg"
//     }
//   }