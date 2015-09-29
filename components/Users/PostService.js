angular.module('QuizApp')
	.factory('PostService', function (){
		var o = {};
		o.posts = []

		o.addPost = function  (post) {
			o.posts.push({
				user: "Nguyen Trong Luong",
				avatar: "assets/imgs/jenny.jpg",
				description: post.description,
				likes: 0,
				comments: 0
			});
		}

		return o;
	})