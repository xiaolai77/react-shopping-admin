import React from "react";
import {categoryApi} from "../api/api";
export default class Category extends React.Component {
    componentWillMount(){
        categoryApi().then(function(data){
             console.log(data)
        }).catch(function(err){
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>1</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}