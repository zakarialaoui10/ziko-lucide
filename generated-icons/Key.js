import {tags} from 'ziko';
const {svg} = tags;
const Key = (props) => 
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
    tags.path({"d":"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}),
	tags.path({"d":"m21 2-9.6 9.6"}),
	tags.circle({"cx":"7.5","cy":"15.5","r":"5.5"})
    )
export default Key;
