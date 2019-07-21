Page({
  data: {
    pics: ['images/1.jpg', 'images/2.jpg', 'images/2.jpg', 'images/3.jpg','images/4.jpg'],
    navItem: [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
    ],
  },

  /**
   * 获取用户头像昵称信息
   */
  getUserInfo() {
    my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        my.getAuthUserInfo({
          success: (info) => {
            this.setData({
              name : info.nickName,
              pic: info.avatar
            })
          // this.name = info.nickName
          },
        });
      },
    });
  },

  /**
   * 请求数据
   */
  getData() {
    my.httpRequest({
      url: 'http://localhost:3000/zyh', // 目标服务器url
      success: (res) => {
        console.log(res);
      },
    });
  },

  onLoad(query) {
    // 页面加载
    // console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
