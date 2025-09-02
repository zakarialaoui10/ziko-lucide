import {tags} from 'ziko';
const {svg} = tags;
const Lasso = (props) => 
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
    tags.path({"d":"M3.704 14.467A10 8 0 0 1 2 10a10 8 0 0 1 20 0 10 8 0 0 1-10 8 10 8 0 0 1-5.181-1.158"}),
	tags.path({"d":"M7 22a5 5 0 0 1-2-3.994"}),
	tags.circle({"cx":"5","cy":"16","r":"2"})
    )
export default Lasso;
