import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import styled from '@emotion/styled';
import Image from 'next/image'
import { PageSubtitle } from '../../styles'
import Link from 'next/link'

const cards = [
	{
		id: 1,
		heading: 'Redux',
		description: 'It\'s like state, only centralized!',
		img: {
			title: 'Redux Meme',
			url: '/redux_meme.jpg',
			alt: 'watching the world burn when passing object to redux'
		},
		viewUrl: "/redux"
	},
	{
		id: 2,
		heading: "Styled Components",
		description: "emotion? styled-components? @emotion/styled? I have no idea.. let\'s figure it out.",
		img: {
			title: 'Styled-Components meme',
			url: '/styled-components-meme.jpg',
			alt: 'elmo chooses between regular styling and styled components, '+ 
			'represented by fruit and sugar. Yes, that is sugar. I swear officer.'
		},
		viewUrl: "/styled-components"
	}
];

const CenteredPageSubtitle = styled(PageSubtitle)({
	textAlign: 'center'
})

const HomeCard = styled(Card)({
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	paddingTop: 0
})

const HomeCardMedia = styled(CardMedia)({
	height: '200px'
})


export default function HomeCards() {
	return (
		<Container sx={{ py: 8 }} maxWidth="md">
			<CenteredPageSubtitle>Stuff to learn about...</CenteredPageSubtitle>
			<hr />
			<Grid container spacing={4}>
			{cards.map((card) => (
				<Grid item key={card.id} xs={12} sm={6} md={4}>
				<HomeCard>
					<HomeCardMedia title={card.img.title}>
						<Image src={card.img.url} alt={card.img.alt} height={250} width={350} />
					</HomeCardMedia>
					<CardContent sx={{ flexGrow: 1 }}>
						<Typography gutterBottom variant="h5" component="h2">
							{card.heading}
						</Typography>
						<Typography>
							{card.description}
						</Typography>
					</CardContent>
					<CardActions>
						<Link href={card.viewUrl}>
							<Button size="small">View</Button>
						</Link>
					</CardActions>
				</HomeCard>
				</Grid>
			))}
			</Grid>
		</Container>
	);
}