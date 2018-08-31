<template>
    <div class="left-bar bg-gray">
        <div class="bg-light-gray logo-wrap cfff">
            <div class="tc pt10 lh70">
                <img class="logo" src="http://j.vzan.cc/miniapp/img/logoimg.png" />
            </div>
            <div class="f16 tc mt10">小未专业旗舰版</div>
        </div>
        <div class="user-info tc mt40 cfff">
            <div class="avator-name">
                <img class="circle-56 display-inline-block" :src="userInfo.avator"
                    alt="头像" /><br />
                <p class="f14 tc mt10 ellipsis pw20">
                    <el-dropdown trigger="click">
                        <span class="f14 cfff pointer">
                            {{userInfo.name}}<i class="el-icon-arrow-down el-icon--right cfff"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </p>
            </div>
            <div class="tap-list mt20">
                <el-menu active-background-color="#63B504" default-active="1" background-color="#2F3942" text-color="#fff"
                    active-text-color="#fff" :unique-opened="true">
                    <template v-for="(item, index) in tapList">
                        <el-menu-item :index="item.index" v-if="item.type === 'menu-item'">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>{{item.text}}</span>
                            </template>
                        </el-menu-item>
                        <el-submenu :index="item.index" v-if="item.type === 'submenu-item'">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>{{item.text}}</span>
                            </template>
                            <template v-for="(sub, subIndex) in item.subs">
                              <el-menu-item :index="sub.index">{{sub.text}}</el-menu-item>
                            </template>    
                        </el-submenu>
                        <div class="clear" v-if="item.isShowLine">
                            <div class="line fr"></div>
                        </div>
                    </template>
                </el-menu>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        Menu,
        Submenu,
        MenuItem,
        MenuItemGroup,
        Dropdown,
        DropdownMenu,
        DropdownItem
    } from "element-ui";
    export default {
        name: "leftBar",
        components: {
            "el-menu": Menu,
            "el-submenu": Submenu,
            "el-menu-item": MenuItem,
            "el-menu-item-group": MenuItemGroup,
            "el-dropdown": Dropdown,
            "el-dropdown-menu": DropdownMenu,
            "el-dropdown-item": DropdownItem
        },
        data() {
            return {
                tapList: [
                    {
                        type: 'menu-item',
                        text: '阿拉丁统计',
                        isShowLine: false,
                        index: '1'
                    },
                    {
                        type: 'menu-item',
                        text: '小程序编辑',
                        isShowLine: false,
                        index: '2'
                    },
                    {
                        type: 'menu-item',
                        text: '小程序管理',
                        isShowLine: false,
                        index: '3'
                    },
                    {
                        type: 'menu-item',
                        text: '店铺设置',
                        isShowLine: true,
                        index: '4'
                    }, 
                    {
                        type: 'submenu-item',
                        text: '产品管理',
                        index: '5',
                        subs: [
                            {
                                text: '选项一',
                                index: '5-1'
                            }
                        ],
                        isShowLine: false
                    },
                    {
                        type: 'submenu-item',
                        text: '订单管理',
                        index: '6',
                        subs: [
                            {
                                text: '选项一',
                                index: '6-1'
                            }
                        ],
                        isShowLine: false
                    },
                    {
                        type: 'submenu-item',
                        text: '内容管理',
                        index: '7',
                        subs: [
                            {
                                text: '选项一',
                                index: '7-1'
                            }
                        ],
                        isShowLine: false
                    },
                    {
                        type: 'submenu-item',
                        text: '营销管理',
                        index: '8',
                        subs: [
                            {
                                text: '选项一',
                                index: '8-1'
                            }
                        ],
                        isShowLine: false
                    },
                     {
                        type: 'submenu-item',
                        text: '会员管理',
                        index: '9',
                        subs: [
                            {
                                text: '选项一',
                                index: '9-1'
                            }
                        ],
                        isShowLine: false
                    },
                    {
                        type: 'submenu-item',
                        text: '分销管理',
                        index: '10',
                        subs: [
                            {
                                text: '选项一',
                                index: '10-1'
                            }
                        ],
                        isShowLine: false
                    },
                    {
                        type: 'menu-item',
                        text: '积分管理',
                        isShowLine: false,
                        index: '11'
                    },
                    {
                        type: 'menu-item',
                        text: '分享设置',
                        isShowLine: false,
                        index: '12'
                    },
                    {
                        type: 'menu-item',
                        text: '自定义菜单',
                        isShowLine: true,
                        index: '13'
                    },
                     {
                        type: 'menu-item',
                        text: '微信在线客服',
                        isShowLine: false,
                        index: '14'
                    },
                     {
                        type: 'menu-item',
                        text: '子账号管理',
                        isShowLine: false,
                        index: '15'
                    },
                ],
                userInfo: {
                    name: '古巨基',
                    avator: 'http://n.sinaimg.cn/translate/20170726/Zjd3-fyiiahz2863063.jpg'
                }
            }
        },
        mounted() {
            console.log("我是组件leftBar");
        }
    };
</script>

<style lang="less">
    .left-bar {
        opacity: 0;
        position: fixed;
        top: 0;
        bottom: 0;
        padding-bottom: 30px;
        width: 200px;
        overflow-x: hidden;

        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;

        &::-webkit-scrollbar {
            width: 0 !important;
        }

        .logo-wrap {
            height: 70px;
        }

        .logo {
            width: 34px;
            height: 20px;
        }

        .tap-item {
            transition: all 0.35s ease-in-out;
            width: 100%;
            height: 54px;
            line-height: 54px;
        }

        .tap-item:hover {
            background: rgba(73, 183, 89, 1);
        }

        .line {
            width: 175px;
            height: 1px;
            background: rgba(63, 75, 86, 1);
            margin: 20px 0;
        }

        .el-menu {
            border-right: none;
        }

        .el-menu-item,
        .el-submenu__title {
            height: 40px !important;
            line-height: 40px !important;
            text-align: left;
        }

        .el-submenu__icon-arrow {
            right: 50px;
        }

        .el-menu-item i,
        .el-submenu__title i {
            color: #fff;
        }
    }
</style>