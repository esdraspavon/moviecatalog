export default class Spinner extends React.Component {
    render(){
        return<div className="Spinner-container">

            <div className="lds-dual-ring">
            </div>
                <style jsx>{`
                .Spinner-container{
                display:flex;
                justify-content:center;
                }
                .lds-dual-ring {
                    display: inline-block;
                    width: 64px;
                    height: 64px;
                }
                .lds-dual-ring:after {
                    content: " ";
                    display: block;
                    width: 46px;
                    height: 46px;
                    margin: 1px;
                    border-radius: 50%;
                    border: 5px solid #fff;
                    border-color: #fff transparent #fff transparent;
                    animation: lds-dual-ring 1.2s linear infinite;
                }
                @keyframes lds-dual-ring {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                
                `}</style>
        </div>
    }
}
