import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
    componentWillMount(){
        // before rendering
        
        // 회원 인증 서버에서 일치하는 데이터 가져오기
        // 일단은 직접 작성
        this.id = 1;
        this.name = "우희은";
        this.major = "컴퓨터과학부";
        this.type = 1;
        this.student_number = "2017920038";
    }

    render() {
        const path_name = "/home";
        return (
            <div className="Login">
                <Link to={{
                    pathname:path_name,
                    state:{
                        // 로그인 시 회원인증 서버에서 넘어오는 정보 넘기기
                        id: this.id,
                        name: this.name,
                        major: this.major,
                        type: this.type,
                        student_number: this.student_number
                    }
                }}>
                    <button>click</button>
                </Link>
            </div>
        );
    }
}
export default Login