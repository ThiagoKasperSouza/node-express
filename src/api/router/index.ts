/*
======================= START OF LICENSE NOTICE =======================
  Copyright (C) 2024 Thiago Kasper de Souza. All Rights Reserved

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS'
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

======================== END OF LICENSE NOTICE ========================
  Primary Author: Thiago Kasper de Souza

*/

import { Router, Request, Response } from 'express';
import DefaultHandler from './handlers/DefaultHandler';
import authRouter from '../modules/middleware/routes';
export const router = Router();



router.use('/auth', authRouter);

router.get('/healthcheck', (req:Request, res:Response) =>  {
  const data:object = { 
    uptime: process.uptime(), 
    timestamp: Date.now()
  };
  new DefaultHandler(req,res, data);
});
