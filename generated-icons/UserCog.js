import {tags} from 'ziko';
const {svg} = tags;
const UserCog = (props) => 
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
    tags.path({"d":"M10 15H6a4 4 0 0 0-4 4v2"}),
	tags.path({"d":"m14.305 16.53.923-.382"}),
	tags.path({"d":"m15.228 13.852-.923-.383"}),
	tags.path({"d":"m16.852 12.228-.383-.923"}),
	tags.path({"d":"m16.852 17.772-.383.924"}),
	tags.path({"d":"m19.148 12.228.383-.923"}),
	tags.path({"d":"m19.53 18.696-.382-.924"}),
	tags.path({"d":"m20.772 13.852.924-.383"}),
	tags.path({"d":"m20.772 16.148.924.383"}),
	tags.circle({"cx":"18","cy":"15","r":"3"}),
	tags.circle({"cx":"9","cy":"7","r":"4"})
    )
export default UserCog;
