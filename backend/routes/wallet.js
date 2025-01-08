const express = require('express');
const { Connection, PublicKey } = require('@solana/web3.js');

const router = express.Router();

const connection = new Connection(process.env.RPC_ENDPOINT);
const TOKEN_PROGRAM_ID = new PublicKey(process.env.APWR_TOKEN_PROGRAM);
const MINT_ADDRESS = new PublicKey(process.env.APWR_MINT_ADDY);

router.get('/balance/:address', async (req, res) => {
    const { address } = req.params;

    try {
        const publicKey = new PublicKey(address);

        const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
            programId: TOKEN_PROGRAM_ID,
        });

        const tokenAccount = tokenAccounts.value.find(
            (account) => account.account.data.parsed.info.mint === MINT_ADDRESS.toString()
        );

        if (tokenAccount) {
            const tokenAmount = tokenAccount.account.data.parsed.info.tokenAmount;
            res.json({ balance: tokenAmount.uiAmount });
        } else {
            res.json({ balance: 0 });
        }
    } catch (error) {
        console.error('Error fetching token balance:', error);
        res.status(500).json({ error: 'Failed to fetch token balance' });
    }
});

module.exports = router;
