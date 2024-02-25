function Login() {
    const isLogin = false;
    return (
        <>
            {isLogin === true ? (<>
                <div>
                    Thông tin người dùng, nút logout
                </div>
            </>) : (<>
                <div>
                    Nút đăng nhập, Nút đăng kí
                </div>
            </>)}
            
            
            {/* {isLogin === true ? (<>
                <div>
                    Avartar
                </div>
            </>) : (<></>)} */}

            {isLogin && <div>Avartar</div>}
        </>
    )
}

export default Login;