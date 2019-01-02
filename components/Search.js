export default class Search extends React.Component {
    render(){
        return<div className="Search-container">

         <form
        className="Search"
        onSubmit={this.props.handleSubmit}
        >
        <input
            ref={this.props.setRef}
            className="Search-input"
            type="text"
            placeholder="Busca tu video favorito"
            onChange={this.props.handleChange}
            value={this.props.value}
            />
    </form>
    <style jsx>{`
    .Search-container{
        display:flex;
        justify-content: center;
    }
    .Search {
        max-width: 400px;
        margin-bottom: 20px;
        margin-top: 10px;
      }
      
      .Search-input {
        background: #202020;
        padding: 10px;
        font-size: 18px;
        font-family: Arial;
        width: 100%;
        border-radius: 7px;
        border:none;
        outline: 0;
        transition: .2s;
        color: #ddd;
      }
      
      .Search-input:focus {
        box-shadow: 0010pxrgba(0,0,0,.5);
      }    
    `}</style>
        </div>
    }
}
