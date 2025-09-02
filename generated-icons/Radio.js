import {tags} from 'ziko';
const {svg} = tags;
const Radio = (props) => 
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
    tags.path({"d":"M16.247 7.761a6 6 0 0 1 0 8.478"}),
	tags.path({"d":"M19.075 4.933a10 10 0 0 1 0 14.134"}),
	tags.path({"d":"M4.925 19.067a10 10 0 0 1 0-14.134"}),
	tags.path({"d":"M7.753 16.239a6 6 0 0 1 0-8.478"}),
	tags.circle({"cx":"12","cy":"12","r":"2"})
    )
export default Radio;
