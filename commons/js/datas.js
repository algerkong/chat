export default{
	friends:function(){
		let friendarr=[
			{
				id:1,
				imgUrl:'a(1).jpg',
				tip:2,
				name:'张三',
				email:'liuliu@fox.com',
				time:new Date(),
				news:'如果实现单行文本的溢出显示省略号'
			},
			{
				id:2,
				imgUrl:'a(2).jpg',
				tip:5,
				name:'李四',
				email:'liuliu@fox.com',
				time:new Date(),
				news:'如果实现单行文本的溢出显示省略号'
			},
			{
				id:3,
				imgUrl:'a(3).jpg',
				tip:66,
				name:'王五',
				email:'liuliu@fox.com',
				time:new Date(),
				news:'如果实现单行文本的溢出显示省略号'
			},
			{
				id:4,
				imgUrl:'a(4).jpg',
				tip:33,
				name:'赵六',
				email:'liuliu@fox.com',
				time:new Date(),
				news:'如果实现单行文本的溢出显示省略号'
			},
			{
				id:5,
				imgUrl:'a(5).jpg',
				tip:2,
				name:'杨家兴',
				email:'liuliu@fox.com',
				time:new Date(),
				news:'如果实现单行文本的溢出显示省略号'
			},
			{
				id:6,
				imgUrl:'a(6).jpg',
				tip:5,
				name:'刘俊杰',
				email:'liuliu@fox.com',
				time:new Date(),
				news:'如果实现单行文本的溢出显示省略号'
			},
			{
				id:7,
				imgUrl:'a(7).jpg',
				tip:66,
				name:'仇迪',
				email:'liuliu@fox.com',
				time:new Date(),
				news:'如果实现单行文本的溢出显示省略号'
			},
			{
				id:8,
				imgUrl:'a(8).jpg',
				tip:33,
				name:'齐云飞',
				email:'liuliu@fox.com',
				time:new Date(),
				news:'如果实现单行文本的溢出显示省略号'
			},
			
		];
		return friendarr;
	},
	isFriend:function(){
		let isFriend = [
			{
				user:1,
				friend:2
			},
			{
				user:1,
				friend:5
			},
			{
				user:1,
				friend:8
			},
			{
				user:1,
				friend:3
			}
		]
		return isFriend
	}
}