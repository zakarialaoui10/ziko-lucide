import {tags} from 'ziko';
const {svg} = tags;
const Radar = (props) => 
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
    tags.path({"d":"M19.07 4.93A10 10 0 0 0 6.99 3.34"}),
	tags.path({"d":"M4 6h.01"}),
	tags.path({"d":"M2.29 9.62A10 10 0 1 0 21.31 8.35"}),
	tags.path({"d":"M16.24 7.76A6 6 0 1 0 8.23 16.67"}),
	tags.path({"d":"M12 18h.01"}),
	tags.path({"d":"M17.99 11.66A6 6 0 0 1 15.77 16.67"}),
	tags.circle({"cx":"12","cy":"12","r":"2"}),
	tags.path({"d":"m13.41 10.59 5.66-5.66"})
    )
export default Radar;
