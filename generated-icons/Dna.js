import {tags} from 'ziko';
const {svg} = tags;
const Dna = (props) => 
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
    tags.path({"d":"m10 16 1.5 1.5"}),
	tags.path({"d":"m14 8-1.5-1.5"}),
	tags.path({"d":"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"}),
	tags.path({"d":"m16.5 10.5 1 1"}),
	tags.path({"d":"m17 6-2.891-2.891"}),
	tags.path({"d":"M2 15c6.667-6 13.333 0 20-6"}),
	tags.path({"d":"m20 9 .891.891"}),
	tags.path({"d":"M3.109 14.109 4 15"}),
	tags.path({"d":"m6.5 12.5 1 1"}),
	tags.path({"d":"m7 18 2.891 2.891"}),
	tags.path({"d":"M9 22c1.798-1.998 2.518-3.995 2.807-5.993"})
    )
export default Dna;
