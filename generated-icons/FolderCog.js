import {tags} from 'ziko';
const {svg} = tags;
const FolderCog = (props) => 
    svg(
        {
        ...{
         "viewBox": "0 0 24 24",
         "fill": "none",
         "width": 24,
         "height": 24,
         "stroke": "green",
         "stroke-width": 2,
         "stroke-linecap": "round",
         "stroke-linejoin": "round"
        },
        ...props
        },
    tags.path({"d":"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3"}),
	tags.path({"d":"m14.305 19.53.923-.382"}),
	tags.path({"d":"m15.228 16.852-.923-.383"}),
	tags.path({"d":"m16.852 15.228-.383-.923"}),
	tags.path({"d":"m16.852 20.772-.383.924"}),
	tags.path({"d":"m19.148 15.228.383-.923"}),
	tags.path({"d":"m19.53 21.696-.382-.924"}),
	tags.path({"d":"m20.772 16.852.924-.383"}),
	tags.path({"d":"m20.772 19.148.924.383"}),
	tags.circle({"cx":"18","cy":"18","r":"3"})
    )
export default FolderCog;
