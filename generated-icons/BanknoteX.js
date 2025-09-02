import {tags} from 'ziko';
const {svg} = tags;
const BanknoteX = (props) => 
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
    tags.path({"d":"M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"}),
	tags.path({"d":"m17 17 5 5"}),
	tags.path({"d":"M18 12h.01"}),
	tags.path({"d":"m22 17-5 5"}),
	tags.path({"d":"M6 12h.01"}),
	tags.circle({"cx":"12","cy":"12","r":"2"})
    )
export default BanknoteX;
