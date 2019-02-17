import React from 'react';
import '../static/css/home.css';
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="i_qq_bg i_qq">
                    <h3>综合统计</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td className="i_qq_bgt">提现申请</td>
                                <td className="i_qq_bgt">售完商品</td>
                                <td className="i_qq_bgt">最近7天商品评论</td>
                                <td className="i_qq_bgt">未上架商品</td>
                            </tr>
                            <tr>
                                <td className="i_qq_bgl">0</td>
                                <td className="i_qq_bgl"> 0</td>
                                <td className="i_qq_bgl">0</td>
                                <td className="i_qq_bgl">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}