import React from "react";
import homeActions from "../actions/homeActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


const ListPagination=({articlesCount,pager, currentPage, actions})=>{
    if(articlesCount<=10){
        return null;
    }
    const range=[];

    for(let i=0; i<Math.ceil(articlesCount/10); i++){
        range.push(i);
    }

    const setPage=page=>{
        actions.onSetPage(page,pager(page));
    }

  return(
      <nav>
        <ul className="pagination">
            {
               range.map(v=>{
                   const isCurrent=v===currentPage;
                   const onClick=ev=>{
                       ev.preventDefault();
                       setPage(v);
                   }
                   return(
                       <li className={isCurrent?"page-item active":"page-item"} key={v.toString()}
                       onClick={onClick}>
                           <a className="page-link" href="">{v+1}</a>
                       </li>
                   )
               })
            }
        </ul>
      </nav>
  )
}

const mapDispatchToProps=dispatch=>({
    actions: bindActionCreators(homeActions,dispatch)
});

export default connect(()=>({}), mapDispatchToProps)(ListPagination);