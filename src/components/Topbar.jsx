import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';

export default function Topbar(){
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="social">Facebook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon />
          <input placeholder="Search for friends, post, video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
      </div>
    </div>
  )
}