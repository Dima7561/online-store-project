import PropTypes from "prop-types";
import {
  Box,
  Button,
  withStyles,
  makeStyles,
  TextField,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles";
import { calculateTotalPrice } from "../../../../helpers/globalUtils";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const CartPageLayout = ({
  classes,
  allPokemon,
  handleRemoveFromCart,
  onHandleItemChange,
  onHandleSubmit,
}) => {
  const history = useHistory();
  const { cartPokemon } = useSelector((state) => state.cart);
  return (
    <Box className={classes.wrapper}>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allPokemon.map((area) => (
              <TableRow key={area.id}>
                <TableCell
                  align="center"
                  component="th"
                  className={classes.colum}
                >
                  <img src={area.image}></img>
                  {area.name}
                </TableCell>

                <TableCell align="left"> {area.id}</TableCell>
                <TableCell align="left">
                  <TextField
                    className={classes.quantity}
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={area.quantity}
                    onChange={(event) =>
                      onHandleItemChange({
                        id: area.id,
                        value: event.target.value > 1 ? event.target.value : 1,
                        fieldToEdit: "quantity",
                      })
                    }
                  />
                </TableCell>
                <TableCell align="left" className={classes.price}>
                  {area.price}$
                </TableCell>
                <TableCell align="left">
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleRemoveFromCart(area.id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/products")}
        >
          Back
        </Button>
      </Box>
      <Box className={classes.total}>
        <Box className={classes.cart}>CART </Box>
        <Box onSubmit={onHandleSubmit} cartPokemon={cartPokemon}>
          TOTAL: <></>
          {calculateTotalPrice(cartPokemon)}$
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            TO ORDER
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
CartPageLayout.propTypes = {};

export default withStyles(styles)(CartPageLayout);
