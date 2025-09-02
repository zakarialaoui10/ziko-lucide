import {tags} from 'ziko';
const {svg} = tags;
const Vault = (props) => 
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
    tags.rect({"width":"18","height":"18","x":"3","y":"3","rx":"2"}),
	tags.circle({"cx":"7.5","cy":"7.5","r":".5","fill":"currentColor"}),
	tags.path({"d":"m7.9 7.9 2.7 2.7"}),
	tags.circle({"cx":"16.5","cy":"7.5","r":".5","fill":"currentColor"}),
	tags.path({"d":"m13.4 10.6 2.7-2.7"}),
	tags.circle({"cx":"7.5","cy":"16.5","r":".5","fill":"currentColor"}),
	tags.path({"d":"m7.9 16.1 2.7-2.7"}),
	tags.circle({"cx":"16.5","cy":"16.5","r":".5","fill":"currentColor"}),
	tags.path({"d":"m13.4 13.4 2.7 2.7"}),
	tags.circle({"cx":"12","cy":"12","r":"2"})
    )
export default Vault;
