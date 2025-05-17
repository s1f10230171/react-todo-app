// 共通スタイル定義
export const formStyle = {
    display: 'flex',
};

export const inputStyle = {
    backgroundColor: 'darkgrey', border: 'none',
    outline: 'none', fontSize: 16, color: 'white',
    lineHeight: 2, flex: 1 
};

export const btnStyle = {
    backgroundColor: 'dimgrey', border: 'none',
    color: 'white', fontSize: 16, cursor: 'pointer', 
    paddingLeft: 15, paddingRight: 15
};

export const itemStyle = {
    display: 'flex', alignItems: 'center',
    padding: 10, 
    borderTop: '1px solid #dee2e6'
};

export const checkboxStyle = {cursor: 'pointer'};

export const textStyle = {
    flex:1, marginLeft: 10,
    // textDecorationは各コンポーネントで上書き
}; 