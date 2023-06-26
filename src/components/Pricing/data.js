const services = [
	{
		ServiceName: 'Exterior Wash',
		QC: true,
		PC: true,
		QD: true,
	},
	{
		ServiceName: 'Wheel Cleaning',
		QC: true,
		PC: true,
		QD: true,
	},
	{
		ServiceName: 'Tire Dressing',
		QC: true,
		PC: true,
		QD: true,
	},
	{
		ServiceName: 'Door Jams Cleaning',
		QC: true,
		PC: true,
		QD: true,
	},
	{
		ServiceName: 'Exterior Windows',
		QC: true,
		PC: true,
		QD: true,
	},
	{
		ServiceName: 'Interior Windows',
		QC: true,
		PC: true,
		QD: true,
	},
	{
		ServiceName: 'Hard Surfaces Cleaning',
		QC: true,
		PC: true,
		QD: true,
	},
	{
		ServiceName: 'Carpet & Seats Vacuuming',
		QC: true,
		PC: true,
		QD: true,
	},
	{
		ServiceName: 'Wax',
		QC: { AddOn: 25 },
		PC: true,
		QD: true,
	},
	{
		ServiceName: 'Seat Shampoo',
		QC: false,
		PC: true,
		QD: true,
	},
	{
		ServiceName: 'Leather Seat Conditioner',
		QC: false,
		PC: true,
		QD: true,
	},
	{
		ServiceName: 'Seat Extraction',
		QC: false,
		PC: false,
		QD: true,
	},
	{
		ServiceName: 'Carpet Extraction',
		QC: false,
		PC: false,
		QD: true,
	},
	{
		ServiceName: 'Clay Bar',
		QC: false,
		PC: false,
		QD: true,
	},
	{
		ServiceName: 'Compound',
		QC: false,
		PC: false,
		QD: true,
	},
	{
		ServiceName: 'Polish',
		QC: false,
		PC: false,
		QD: true,
	},
	{
		ServiceName: 'Headlight Reconditioning',
		QC: { AddOn: 60 },
		PC: { AddOn: 60 },
		QD: { AddOn: 60 },
	},
	{
		ServiceName: 'Engine Cleaning',
		QC: { AddOn: 70 },
		PC: { AddOn: 70 },
		QD: { AddOn: 70 },
	},
	{
		ServiceName: 'Odor Bomb',
		QC: { AddOn: 20 },
		PC: { AddOn: 20 },
		QD: { AddOn: 20 },
	},
];

export default services;
