
const Header = () => {
    return (
        <header className="header_space" role="banner" style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}>
            <div className="header_inner_area" style={{ display: "flex", backgroundColor: "#f4e5d1", justifyContent: "space-between", alignItems: "center", padding: "20px", textAlign: "left" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="header_main_title" style={{ color: "black", fontSize: "26px", fontWeight: "bold"}}>ReMovie</div>
                    <div className="header_sub_title" style={{ color: "black", fontSize: "10px", fontWeight: "bold"}}>
                    Search my best MOVIE
                    </div>
                </div>
                <div className="login_area" style={{ padding: "10px"}}>
                    <button
                        style={{
                            padding: "4px 14px",
                            fontSize: "10px",
                            fontWeight: "bold",
                            borderRadius: "4px",
                            border: "3px solid black",
                            backgroundColor: "transparent",
                            color: "black",
                            cursor: "pointer"
                          }}
                          onClick={() => {
                            // 로그인 클릭 시 동작
                            alert("로그인 버튼 클릭!");
                          }}
                        >
                          Login
                        </button>
                </div>
            </div>
        </header>
    )
}

export default Header