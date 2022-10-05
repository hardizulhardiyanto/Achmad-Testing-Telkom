import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';

export const ListHomeDashboard = ( props ) => {
    const { listRows } = props

    return(
        <Grid
            style={{ padding: 5, maxWidth:"70rem" }}
            container
            direction="row"
            alignItems="center"

        >
        {Array.from(listRows).map((el, i) => (
                <Grid
                    key={i}
                    item
                    xs={12}
                    md={3}
                    sm={6}
                    style={{ padding: 5 }}
                >
                    <Card
                        style={{ height: "21rem" }}
                    >
                        <CardMedia
                            component="img"
                            height="140"
                            image={el.owner.avatar_url}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {el.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {el.description}
                            </Typography>
                            <div style={{marginTop: 22}}>
                                <Typography variant="body1" color="text.secondary" >
                                    {`Language: ${el.language}`}
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}