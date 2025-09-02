import {tags} from 'ziko';
const {svg} = tags;
const PackageSearch = (props) => 
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
    tags.path({"d":"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}),
	tags.path({"d":"m7.5 4.27 9 5.15"}),
	tags.polyline({"points":"3.29 7 12 12 20.71 7"}),
	tags.line({"x1":"12","x2":"12","y1":"22","y2":"12"}),
	tags.circle({"cx":"18.5","cy":"15.5","r":"2.5"}),
	tags.path({"d":"M20.27 17.27 22 19"})
    )
export default PackageSearch;
