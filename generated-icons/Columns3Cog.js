import {tags} from 'ziko';
const {svg} = tags;
const Columns3Cog = (props) => 
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
    tags.path({"d":"M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"}),
	tags.path({"d":"m14.3 19.6 1-.4"}),
	tags.path({"d":"M15 3v7.5"}),
	tags.path({"d":"m15.2 16.9-.9-.3"}),
	tags.path({"d":"m16.6 21.7.3-.9"}),
	tags.path({"d":"m16.8 15.3-.4-1"}),
	tags.path({"d":"m19.1 15.2.3-.9"}),
	tags.path({"d":"m19.6 21.7-.4-1"}),
	tags.path({"d":"m20.7 16.8 1-.4"}),
	tags.path({"d":"m21.7 19.4-.9-.3"}),
	tags.path({"d":"M9 3v18"}),
	tags.circle({"cx":"18","cy":"18","r":"3"})
    )
export default Columns3Cog;
