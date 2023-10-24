import { useState, useEffect } from 'react'
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@mui/material'
import { Header } from '../Components/Header'
import { RECEIPT_HEADERS } from '../Constants/constants'
import { AccountMenu } from '../Components/AccountMenu'

export const HistorikPage = () => {
  const [receipts, setReceipts] = useState([])

  useEffect(() => {
    const storedReceipts = localStorage.getItem('formData')
    if (storedReceipts) {
      setReceipts(JSON.parse(storedReceipts))
    }
  }, [])

  return (
    <Container
      maxWidth="sm"
      sx={{ position: 'relative' }}>
      <AccountMenu />
      <Header content="Registreringshistorik" />
      <Grid
        item
        xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {RECEIPT_HEADERS.map((header) => (
                  <TableCell key={header}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {receipts.map((receipt, index) => (
                <TableRow key={index}>
                  <TableCell>{receipt.date}</TableCell>
                  <TableCell>{receipt.amount}</TableCell>
                  <TableCell>{receipt.description}</TableCell>
                  <TableCell>
                    <Box
                      component="img"
                      src={`uploads/${receipt.receipt}`}
                      alt="Receipt Thumbnail"
                      sx={{ width: 50, height: 50 }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  )
}
