Page({
  /**
   * 页面的初始数据
   */
  data: {
    time: 15,
    isbind: false,
    countdown: 0,
    count: 0,
    playcount: 1,
    isable: false,
    xiazhu: false,
    beilv: 1,
    lunci: 1,
    winner:'',
    ubeilv: 0,
    imagelist:[
      "",
      "https://s1.imagehub.cc/images/2023/09/26/1695725875655.png",
      "https://s1.imagehub.cc/images/2023/09/26/1695725963643.png",
      "https://s1.imagehub.cc/images/2023/09/26/1695726051417.png",
      "https://s1.imagehub.cc/images/2023/10/08/1696751446307.png",
      "https://s1.imagehub.cc/images/2023/10/08/1696751638447.png",
      "https://s1.imagehub.cc/images/2023/10/08/1696751731290.png",
    ],
    play: [{
        name: 'player',
        lock: 0,
        suoding: [],
        point: 0,
        chip: 100,
        current: 0,
        isrobot: false
      },
      {
        isrobot: true,
        name: 'ai',
        lock: 0,
        suoding: [],
        point: 0,
        chip: 100,
        current: 0
      }
    ],
    checkbord: [{
        flag: true,
        data: 0,
        color: 'sandybrown;',
        vis:false
      },
      {
        flag: true,
        data: 0,
        color: 'sandybrown;',
        vis:false
      },
      {
        flag: true,
        data: 0,
        color: 'sandybrown;',
        vis:false

      },
      {
        flag: true,
        data: 0,
        color: 'sandybrown;',
        vis:false
      },
      {
        flag: true,
        data: 0,
        color: 'sandybrown;',
        vis:false

      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.countdown();
  },
  aiplay() {
    let re = 'play[' + this.data.count % 2 + '].isrobot'
    if (this.data.play[this.data.count % 2].isrobot) {
      let flag = false;
      this.setData({
        [re]:flag,
        time:11
      })
    }
    else
    {
      let flag = true;
      this.setData({
        [re]:flag,
        time:11
      })
    }
  },

  alllock: function () {
    this.lock1();
    this.lock2();
    this.lock3();
    this.lock4();
    this.lock5();
  },
  turntopage() {
    wx.navigateTo({
      url: '../winner/winner?winner='+this.data.winner
    })
  },
  nextgame() {
    this.setData({
      count: 15
    })
    let flag = 0;
    this.setData({
      beilv: this.data.play[0].current + this.data.play[1].current + this.data.beilv
    })
    let t = parseInt((this.data.play[0].point - this.data.play[1].point) * this.data.beilv);
    let t0 = parseInt(this.data.play[0].chip) + t;
    let t1 = parseInt(this.data.play[1].chip) - t;
    if (t0 <= 0 || t1 <= 0) {
      flag = 1;
    }
    this.setData({
      ['play[0].chip']: t0,
      ['play[1].chip']: t1,
      playcount: this.data.playcount - 1
    })
    if (this.data.playcount == 0 || flag == 1) {
      let max=this.data.play[0].chip;
      let maxi=0;
      for(let i=1;i<2;i++)
      {
        if(max<this.data.play[i].chip)
        {
          max=this.data.play[i].chip;
          maxi=i;
        }
      }
      this.setData({
        winner:this.data.play[maxi].name
      })
      setTimeout(this.turntopage,1500)
    }
    let r0 = this.data.play[0].suoding;
    let r1 = this.data.play[1].suoding;
    for (let i = 0; i < 5; i++) {
      r0.pop()
      r1.pop()
    }
    this.setData({
      count: 0,
      time: 15,
      ["play[0].suoding"]: r0,
      ["play[1].suoding"]: r1,
      ["play[0].point"]: 0,
      ["play[1].point"]: 0,
      ["play[0].lock"]: 0,
      ["play[1].lock"]: 0,
      lunci: 1
    })
  },

  countdown() {
    if (this.data.play[this.data.count % 2].lock == 5 && this.data.xiazhu == false) {
      this.setData({
        count: this.data.count + 1
      })
    }
    this.setData({
      countdown: this.data.time,
      time: this.data.time - 1
    })
    if (this.data.play[this.data.count % 2].isrobot && this.data.time == 10 && this.data.count % 4 != 3 && this.data.count % 4 != 2) {
      this.bindtap();
    }
    if (this.data.play[this.data.count % 2].isrobot && this.data.time == 7 && this.data.count % 4 != 3 && this.data.count % 4 != 2) {
      this.robot();
    }
    if (this.data.play[this.data.count % 2].isrobot && this.data.time == 5) {
      this.queding()
    }
    if (this.data.time == -1) {
      if (this.data.count == 8 || this.data.count == 9) {
        if (!this.data.isbind) {
          this.bindtap()
        }
        this.alllock();
      }
      this.sort_lock()
      this.data.time = 15;
      if (this.data.count == 1 || this.data.count == 2 || this.data.count == 5 || this.data.count == 6) {
        if (this.data.play[this.data.count % 2].isrobot) {
          this.robotxiazhu()
        }
        this.setData({
          isable: true,
          xiazhu: true
        })
      } else {
        this.setData({
          isable: false,
          xiazhu: false
        })
      }
      let i = parseInt((this.data.count + 1) / 4) + 1;
      this.setData({
        count: this.data.count + 1,
        lunci: i
      })
      this.resetcheckbord();
    }
    setTimeout(this.countdown, 1000);
  },
  //确定函数
  queding: function () {
    let sum = 1;
    for (let i = 0; i < 2; i++) {
      sum = sum + this.data.play[i].current
    }
    this.setData({
      beilv: sum
    })
    this.data.time = 0
  },
  //锁定骰子
  sort_lock: function () {
    let list = new Array();
    let num = 0;
    for (var i = 0; i < 5; i++) {
      if ((this.data.count == 8 || this.data.count == 9) && this.data.checkbord[i].data != 0) {
        list[num++] = this.data.checkbord[i].data;
      } else if (!this.data.checkbord[i].flag && this.data.checkbord[i].data != 0) {
        list[num++] = this.data.checkbord[i].data;
      }
    }
    list.sort(function (a, b) {
      return a - b;
    })
    for (let i = 0; i < num; i++) {
      let t = this.data.play[this.data.count % 2].lock++;
      let revise = "play[" + this.data.count % 2 + "].suoding[" + t + "]";
      this.setData({
        [revise]: list[i]
      })
    }
    this.get_point();
  },
  //重置骰子
  resetcheckbord: function () {
    for (let i = 0; i < 5; i++) {
      let revise = "checkbord[" + i + "].data";
      let re = "checkbord[" + i + "].flag";
      let re1 = "checkbord[" + i + "].color";
      let re2 = "checkbord[" + i + "].vis";
      this.setData({
        isbind: false,
        [revise]: 0,
        [re]: true,
        chip: 0,
        [re1]: 'sandybrown',
        [re2]:false
      })
    }
  },

  bindPickerChange: function (e) {
    //let i=this.data.play[this.data.count%2].current+parseInt(e.detail.value)
    let i = parseInt(e.detail.value)
    this.setData({
      ["play[" + this.data.count % 2 + "].current"]: i
    });
  },
  //摇骰子
  bindtap: function () 
  {
    for (let i = 0; i < this.data.play[this.data.count % 2].lock; i++) {
      let revise = "checkbord[" + i + "].data";
      let ran = 0;
      this.setData({
        [revise]: ran
      })
  }
    for (let i = this.data.play[this.data.count % 2].lock; i < 5; i++) {
      var ran = Math.floor(Math.random() * 6 + 1);
      let revise = "checkbord[" + i + "].data";
      let re = "checkbord[" + i + "].vis";
      let flag=true;
      this.setData({
        [revise]: ran,
        [re]:flag
      })
    }this.setData({
      isable: true,
      isbind: true
    })
  },
  //入口
  lock1: function () {
    if(this.data.play[this.data.count%2].isrobot){return ;}
    this.locked(0)
  },
  lock2: function () {
    if(this.data.play[this.data.count%2].isrobot){return ;}
    this.locked(1)
  },
  lock3: function () {
    if(this.data.play[this.data.count%2].isrobot){return ;}
    this.locked(2)
  },
  lock4: function () {
    if(this.data.play[this.data.count%2].isrobot){return ;}
    this.locked(3)
  },
  lock5: function () {
    if(this.data.play[this.data.count%2].isrobot){return ;}
    this.locked(4)

  },
  locked: function (i) {
    let flag1 = true;
    let color1 = 'sandybrown;';
    if (this.data.checkbord[i].flag) {
      flag1 = false,
        color1 = 'blue;'
    }
    let revise = "checkbord[" + i + "].flag";
    let revise1 = "checkbord[" + i + "].color";
    this.setData({
      [revise]: flag1,
      [revise1]: color1
    })
  },
  //算分
  get_point: function () {
    let op = 0;
    let list = [0, 0, 0, 0, 0, 0, 0];
    let type = 0;
    let sum = 0;
    for (let i = 0; i < this.data.play[this.data.count % 2].lock; i++) {
      list[this.data.play[this.data.count % 2].suoding[i]]++;
      sum += this.data.play[this.data.count % 2].suoding[i];
      if (list[this.data.play[this.data.count % 2].suoding[i]] == 1) {
        type++;
      }
    }
    if (this.data.play[this.data.count % 2].lock <= 2) {} else if (this.data.play[this.data.count % 2].lock == 3) {
      if (type == 1) {
        op = 10
      }
    } else if (this.data.play[this.data.count % 2].lock == 4) {
      if (type == 1) {
        op = 40
      } else if (type == 2 || type == 3) {
        op = 10
      } else {
        if (list[5] == 0 && list[6] == 0) {
          op = 30
        } else if (list[5] == 0 && list[1] == 0) {
          op = 30
        } else if (list[1] == 0 && list[2] == 0) {
          op = 30
        }
      }
    } else {
      if (type == 1 && list[0] == 5) {
        op = 0
      } else if (type == 1) {
        op = 100
      } else if (type == 2) {
        op = 20;
        for (let i in list) {
          if (i == 4) {
            op = 40;
            break;
          }
        }
      } else if (type == 3) {
        op = 10;
      } else if (type == 4) {
        if (list[5] == 0 && list[6] == 0) {
          op = 30
        } else if (list[5] == 0 && list[1] == 0) {
          op = 30
        } else if (list[1] == 0 && list[2] == 0) {
          op = 30
        }
      } else {
        if (list[1] == 0) {
          op = 60
        } else if (list[2] == 0) {
          op = 30
        } else if (list[5] == 0) {
          op = 30
        } else if (list[6] == 0) {
          op = 60
        }
      }
    }
    let revise = "play[" + this.data.count % 2 + "].point";
    this.setData({
      [revise]: op + sum
    })
  },
  robot() {
    let list = [];
    let t = 0;
    let num = 0;
    let a=this.data.count%2;
    for (let i = 0; i < 5; i++) {
      if (i < this.data.play[a].lock) {
        list[i] = this.data.play[a].suoding[i]
      } else {
        while (this.data.checkbord[t].data == 0) {
          t++;
        }
        list[i] = this.data.checkbord[t++].data
      }
    }
    if (this.checkbomb1(list)) {
      for (let i = this.data.play[a].lock; i < 5; i++) {
        this.locked(i)
      }
      this.setData({
        ubeilv: 3
      })
    } else if (this.checkbigsunzi1(list)) {
      for (let i = this.data.play[a].lock; i < 5; i++) {
        this.locked(i)
      }
      this.setData({
        ubeilv: 3
      })
    } else if (this.checksmallsunzi(list)) {
      this.setData({
        ubeilv: 3
      })
    } else if (this.checksunzi(list)) {
      this.setData({
        ubeilv: 3
      })
    } else {
      this.checkdouble(list);
    }
  },
  checkbomb1(list) {
    for (let i = 0; i < 5; i++) {
      if (list[i] != list[0])
        return false;
    }
    return true;
  },
  checkbigsunzi1(list) {
    let Has1 = false;
    let Has2 = false;
    let Has3 = false;
    let Has4 = false;
    let Has5 = false;
    let Has6 = false;
    for (let i = 0; i < 5; i++) {
      if (list[i] == 1) {
        Has1 = true;
      } else if (list[i] == 2) {
        Has2 = true;
      } else if (list[i] == 3) {
        Has3 = true;
      } else if (list[i] == 4) {
        Has4 = true;
      } else if (list[i] == 5) {
        Has5 = true;
      } else {
        Has6 = true;
      }
    }
    if (Has1 && Has2 && Has3 && Has4 && Has5) {
      return true;
    } else if (Has2 && Has3 && Has4 && Has5 && Has6) {
      return true;
    } else
      return false;
  },
  checksmallsunzi(list) {
    let Has1 = false;
    let Has2 = false;
    let Has3 = false;
    let Has4 = false;
    let Has5 = false;
    let Has6 = false;
    let index = [];
    for (let i = 0; i < 5; i++) {
      if (list[i] == 1) {
        if (!Has1) {
          index[1] = i;
          Has1 = true;
        }
      } else if (list[i] == 2) {
        if (!Has2) {
          index[2] = i;
          Has2 = true;
        }
      } else if (list[i] == 3) {
        if (!Has3) {
          index[3] = i;
          Has3 = true;
        }
      } else if (list[i] == 4) {
        if (!Has4) {
          index[4] = i;
          Has4 = true;
        }
      } else if (list[i] == 5) {
        if (!Has5) {
          index[5] = i;
          Has5 = true;
        }
      } else {
        if (!Has6) {
          index[6] = i;
          Has6 = true;
        }
      }
    }
    if (Has1 && Has2 && Has3 && Has4) {
      for (let i = 1; i <= 4; i++) {
        if (index[i] < this.data.play[1].lock) {} else {
          this.locked(index[i])
        }
      }
      return true;
    } else if (Has2 && Has3 && Has4 && Has5) {
      for (let i = 2; i <= 5; i++) {
        if (index[i] < this.data.play[1].lock) {} else {
          this.locked(index[i])
        }
      }
      return true;
    } else if (Has3 && Has4 && Has5 && Has6) {
      for (let i = 3; i <= 6; i++) {
        if (index[i] < this.data.play[1].lock) {} else {
          this.locked(index[i])
        }
      }
      return true;
    } else
      return false;
  },
  checksunzi(list) {
    let Has1 = false;
    let Has2 = false;
    let Has3 = false;
    let Has4 = false;
    let Has5 = false;
    let Has6 = false;
    let index = [];
    for (let i = 0; i < 5; i++) {
      if (list[i] == 1) {
        index[1] = i;
        Has1 = true;
      } else if (list[i] == 2) {
        index[2] = i;
        Has2 = true;
      } else if (list[i] == 3) {
        index[3] = i;
        Has3 = true;
      } else if (list[i] == 4) {
        index[4] = i;
        Has4 = true;
      } else if (list[i] == 5) {
        index[5] = i;
        Has5 = true;
      } else {
        index[6] = i;
        Has6 = true;
      }
    }
    if (Has1 && Has2 && Has3) {
      for (let i = 1; i <= 3; i++) {
        if (index[i] < this.data.play[1].lock) {} else {
          this.locked(index[i])
        }
      }
      return true;
    } else if (Has2 && Has3 && Has4) {
      for (let i = 2; i <= 4; i++) {
        if (index[i] < this.data.play[1].lock) {} else {
          this.locked(index[i])
        }
      }
      return true;
    } else if (Has3 && Has4 && Has5) {
      for (let i = 3; i <= 5; i++) {
        if (index[i] < this.data.play[1].lock) {} else {
          this.locked(index[i])
        }
      }
      return true;
    } else if (Has4 && Has5 && Has6) {
      for (let i = 4; i <= 6; i++) {
        if (index[i] < this.data.play[1].lock) {} else {
          this.locked(index[i])
        }
      }
      return true;
    } else
      return false;
  },
  checkdouble(list) {
    let hash = [0, 0, 0, 0, 0, 0, 0];
    let count=0;
    for (let i = 0; i < 5; i++) {
      hash[list[i]] += 1;
      if(hash[list[i]]==1)
      {
        count++;
      }
    }
    let max = 1;
    for (let i = 1; i < 7; i++) {
      if (max <= hash[i]) {
        max = hash[i];
      }
    }
    if(max==3&&count==2)
    {
      console.log(1);
      for (let i = this.data.play[this.data.count%2].lock; i < 5; i++) {
        if (hash[list[i]] == max) {
          this.locked(i)
        }
      }
      this.setData({
        ubeilv: 3
      })
    }
    else if (max == 4) {
      console.log(2);
      for (let i = this.data.play[this.data.count%2].lock; i < 5; i++) {
        if (hash[list[i]] == max) {
          this.locked(i)
        }
      }
      this.setData({
        ubeilv: 3
      })
    } 
    else if (max == 3) {
      console.log(3);
      for (let i = this.data.play[this.data.count%2].lock; i < 5; i++) {
        if (hash[list[i]] == max) {
          this.locked(i)
        }
      }
      this.setData({
        ubeilv: 2
      })
    } else 
    {
      console.log(4);
      for (let i = this.data.play[this.data.count%2].lock; i < 5; i++) {
        if (hash[list[i]] == max) {
          this.locked(i)
        }
      }
      this.setData({
        ubeilv: 0
      })
    }
  },
  robotxiazhu() {
    let re = 'play[' + this.data.count % 2 + '].current'
    this.setData({
      [re]: this.data.ubeilv
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})