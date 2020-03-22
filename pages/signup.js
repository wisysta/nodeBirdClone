import React, { useState } from 'react';
import { Form, Button, Checkbox, Input } from "antd";
import Head from "next/head"
import AppLayout from '../components/AppLayout';

const Singup = () => {
    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);

    const onSubmit = (e) => {

        e.preventDefault();
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term
        });
    };
    const onChangeId = (e) => {
        setId(e.target.value)
    };
    const onChangeNick = (e) => {
        setNick(e.target.value)
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    };
    const onChangePasswordChk = (e) => {
        setPasswordCheck(e.target.value)
    };
    const onChangeTerm = (e) => {
        setTerm(e.target.checked)
    };



    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.3/antd.css" />
            </Head>
            <AppLayout>
                <Form onSubmit={onSubmit} style={{ padding: 10 }}>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br />
                        <Input name="user-id" value={id} required onChange={onChangeId}></Input>
                    </div>
                    <div>
                        <label htmlFor="user-nick">닉네임</label>
                        <br />
                        <Input name="user-nick" value={nick} required onChange={onChangeNick}></Input>
                    </div>
                    <div>
                        <label htmlFor="user-pass">비밀번호</label>
                        <br />
                        <Input name="user-pass" type="password" value={password} required onChange={onChangePassword}></Input>
                    </div>
                    <div>
                        <label htmlFor="user-pass">비밀번호</label>
                        <br />
                        <Input name="user-pass-chkeck" type="password" value={passwordCheck} required onChange={onChangePasswordChk}></Input>
                    </div>
                    <div>
                        <Checkbox name="user-term" value={term} onClick={onChangeTerm}>현성이 말을 잘 들을 것을 동의 합니다.</Checkbox>
                    </div>
                    <div>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    );
}

export default Singup;