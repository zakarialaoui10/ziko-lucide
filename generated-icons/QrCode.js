import {tags} from 'ziko';
const {svg} = tags;
const QrCode = (props) => 
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
    tags.rect({"width":"5","height":"5","x":"3","y":"3","rx":"1"}),
	tags.rect({"width":"5","height":"5","x":"16","y":"3","rx":"1"}),
	tags.rect({"width":"5","height":"5","x":"3","y":"16","rx":"1"}),
	tags.path({"d":"M21 16h-3a2 2 0 0 0-2 2v3"}),
	tags.path({"d":"M21 21v.01"}),
	tags.path({"d":"M12 7v3a2 2 0 0 1-2 2H7"}),
	tags.path({"d":"M3 12h.01"}),
	tags.path({"d":"M12 3h.01"}),
	tags.path({"d":"M12 16v.01"}),
	tags.path({"d":"M16 12h1"}),
	tags.path({"d":"M21 12v.01"}),
	tags.path({"d":"M12 21v-1"})
    )
export default QrCode;
