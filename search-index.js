var searchIndex = JSON.parse('{\
"bls_dkg":{"doc":"","t":[2,0,2,2,12,3,4,13,13,13,13,13,13,13,13,4,13,13,13,13,3,6,13,13,13,3,4,4,4,3,13,13,13,3,13,13,13,13,13,13,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,11,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,13,13,13,13,4,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,3,11,11,11,11,11,11,12,11,11,12,12,11,11,11,11,11],"n":["blsttc","key_gen","rand_core","xor_name","0","Acknowledgment","AcknowledgmentFault","Commitment","Complaining","Contribution","DecryptRow","DecryptValue","DeserializeRow","DeserializeValue","Encryption","Error","Finalization","Initialization","Invalid","Justification","KeyGen","MessageAndTarget","MissingPart","MissingPart","MultipleParts","Part","PartFault","PartOutcome","Phase","PublicKeySet","QuicP2P","RowAcknowledgment","RowCount","SecretKeyShare","Serialization","TooManyNonVoters","UnexpectedPhase","Unknown","UnknownSender","Valid","ValueAcknowledgment","ValueCount","all_contribution_received","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","cmp","cmp","cmp","cmp","cmp","combine_signatures","decrypt","decrypt_share","decrypt_share_no_verify","default","derive_child","derive_child","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","eq","eq","eq","eq","eq","eq","eq","eq","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from_bytes","from_bytes","from_mut","generate_keys","get_cached_message","handle_message","handle_pre_session_messages","hash","hash","hash","initialize","into","into","into","into","into","into","into","into","into","into","is_finalized","message","ne","ne","ne","ne","ne","node_id_from_index","outcome","partial_cmp","partial_cmp","partial_cmp","partial_cmp","partial_cmp","phase","possible_blockers","public_key","public_key_share","public_key_share","reveal","serialize","serialize","serialize","serialize","serialize","sign","sign_g2","threshold","timed_phase_transition","to_bytes","to_bytes","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_string","to_string","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","0","0","0","actual","expected","0","0","Acknowledgment","Complaint","Initialization","Justification","Message","Proposal","borrow","borrow_mut","clone","clone_into","cmp","creator","deserialize","eq","fmt","from","id","into","ne","partial_cmp","serialize","to_owned","try_from","try_into","type_id","vzip","ack","key_gen_id","key_gen_id","key_gen_id","key_gen_id","key_gen_id","keys_map","m","member_list","msg","n","part","target","Outcome","borrow","borrow_mut","clone","clone_into","fmt","from","index","into","new","public_key_set","secret_key_share","to_owned","try_from","try_into","type_id","vzip"],"q":["bls_dkg","","","","bls_dkg::key_gen","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","bls_dkg::key_gen::Error","","","","","bls_dkg::key_gen::PartOutcome","","bls_dkg::key_gen::message","","","","","","","","","","","","","","","","","","","","","","","","","","bls_dkg::key_gen::message::Message","","","","","","","","","","","","","bls_dkg::key_gen::outcome","","","","","","","","","","","","","","","",""],"d":["","","","","","A confirmation that we have received and verified a …","<code>Acknowledgment</code> faulty entries.","","","","Could not decrypt our row in the Part message.","Value decryption failed.","Could not deserialize our row in the Part message.","Value deserialization failed.","Failed to encrypt message.","A local error while handling a message, that was not …","","","The message was invalid: We now know that the proposer is …","","An algorithm for dealerless distributed key generation.","","Ack on a missed part.","No corresponding Part received.","Received multiple different Part messages from the same …","A contribution by a node for the key generation. The part …","<code>Part</code> faulty entries.","The outcome of handling and verifying a <code>Part</code> message.","","A public key and an associated set of public key shares.","Network error from Quic-P2P.","Row does not match the ack.","The number of rows differs from the number of nodes.","A secret key share.","Failed to serialize message.","Failed to finalize Complaint phase due to too many …","Unexpected phase.","Unknown error.","Unknown sender.","The message was valid: the part of it that was encrypted …","Value doesn’t match the ack.","The number of values differs from the number of nodes.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Combines the shares into a signature that can be verified …","Combines the shares to decrypt the ciphertext.","Returns a decryption share, or <code>None</code>, if the ciphertext isn…","Returns a decryption share, without validating the …","","Derives a child secret key share for a given index.","Derives a child public key set for a given index.","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Deserializes from big endian bytes","Deserializes from big endian bytes","Creates a new <code>SecretKeyShare</code> from a mutable reference to a …","Returns the new secret key share and the public key set.","Cached message will be returned as a list, with …","Dispatching an incoming dkg message.","Handle upper layer cached messages even before this DKG …","","","","Creates a new <code>KeyGen</code> instance, together with the <code>Initial</code> …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Returns <code>true</code> if in the phase of Finalization.","","","","","","","Returns the id of the index, or <code>None</code> if it is unknown.","","","","","","","","This function shall be called when the DKG procedure not …","Returns the public key.","Returns the matching public key share.","Returns the <code>i</code>-th public key share.","Generates a non-redacted debug string. This method differs …","","","","","","Signs the given message.","Signs the given element of <code>G2</code>.","Returns the threshold <code>t</code>: any set of <code>t + 1</code> signature shares …","","Serializes to big endian bytes","Serializes to big endian bytes","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Messages used for running BLS DKG.","","","","","","","","","","","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","DKG result","","","","","","Returns the argument unchanged.","Our index in the group","Calls <code>U::from(self)</code>.","Create Outcome from components","Public key set to verify threshold signatures","Secret Key share.","","","","",""],"i":[0,0,0,0,5,0,0,6,6,6,8,7,8,7,3,0,6,6,40,6,0,0,3,7,8,0,0,0,0,0,3,8,8,0,3,3,3,3,3,40,7,7,1,40,1,3,4,5,6,7,8,9,10,40,1,3,4,5,6,7,8,9,10,3,4,5,6,7,8,9,10,3,4,5,6,7,8,9,10,4,5,7,8,10,10,10,9,9,9,9,10,4,5,6,7,8,9,10,3,4,5,6,7,8,9,10,1,3,3,4,5,6,7,7,8,8,9,10,40,1,3,3,4,5,6,7,8,9,10,10,9,10,9,1,1,1,1,4,5,10,1,40,1,3,4,5,6,7,8,9,10,1,0,3,4,5,9,10,1,0,4,5,7,8,10,1,1,10,9,10,9,4,5,7,8,10,9,9,10,1,9,10,3,4,5,6,7,8,9,10,3,7,8,40,1,3,4,5,6,7,8,9,10,40,1,3,4,5,6,7,8,9,10,40,1,3,4,5,6,7,8,9,10,40,1,3,4,5,6,7,8,9,10,41,42,43,44,44,45,46,28,28,28,28,0,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,47,48,49,50,51,47,51,48,48,50,48,49,50,0,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[1,2],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[4,4],11],[[5,5],11],[[7,7],11],[[8,8],11],[[10,10],11],[10,[[14,[12,13]]]],[[10,15],[[14,[[18,[16,17]],13]]]],[[9,15],[[20,[19]]]],[[9,15],19],[[],9],[9,9],[10,10],[[],[[14,[4]]]],[[],[[14,[5]]]],[[],[[14,[6]]]],[[],[[14,[7]]]],[[],[[14,[8]]]],[[],[[14,[9]]]],[[],[[14,[10]]]],[[3,3],2],[[4,4],2],[[5,5],2],[[6,6],2],[[7,7],2],[[8,8],2],[[9,9],2],[[10,10],2],[[1,21],22],[[3,21],22],[[3,21],22],[[4,21],22],[[5,21],22],[[6,21],22],[[7,21],22],[[7,21],22],[[8,21],22],[[8,21],22],[[9,21],[[14,[23]]]],[[10,21],[[14,[23]]]],[[]],[[]],[[[25,[24]]],3],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[26,10],[[],[[14,[9,13]]]],[[[18,[16,17]]],[[14,[10,13]]]],[27,9],[1,20],[1,[[18,[28]]]],[[1,28],[[14,[[18,[29]],3]]]],[[1,[18,[28]]]],[4],[5],[10],[[30,31,[32,[30]]],[[14,[3]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[1,2],0,[[3,3],2],[[4,4],2],[[5,5],2],[[9,9],2],[[10,10],2],[[1,33],[[20,[30]]]],0,[[4,4],[[20,[11]]]],[[5,5],[[20,[11]]]],[[7,7],[[20,[11]]]],[[8,8],[[20,[11]]]],[[10,10],[[20,[11]]]],[1,6],[1,[[32,[30]]]],[10,34],[9,35],[10,35],[9,36],[4,14],[5,14],[7,14],[8,14],[10,14],[9,37],[9,37],[10,31],[1,[[14,[[18,[29]],3]]]],[9],[10,[[18,[16,17]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],36],[[],36],[[],36],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],38],[[],38],[[],38],[[],38],[[],38],[[],38],[[],38],[[],38],[[],38],[[],38],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[28,28],[[]],[[28,28],11],[28,33],[[],[[14,[28]]]],[[28,28],2],[[28,21],22],[[]],[28,30],[[]],[[28,28],2],[[28,28],[[20,[11]]]],[28,14],[[]],[[],14],[[],14],[[],38],[[]],0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[39,39],[[]],[[39,21],22],[[]],0,[[]],[[10,9,31],39],0,0,[[]],[[],14],[[],14],[[],38],[[]]],"p":[[3,"KeyGen"],[15,"bool"],[4,"Error"],[3,"Part"],[3,"Acknowledgment"],[4,"Phase"],[4,"AcknowledgmentFault"],[4,"PartFault"],[3,"SecretKeyShare"],[3,"PublicKeySet"],[4,"Ordering"],[3,"Signature"],[4,"Error"],[4,"Result"],[3,"Ciphertext"],[15,"u8"],[3,"Global"],[3,"Vec"],[3,"DecryptionShare"],[4,"Option"],[3,"Formatter"],[6,"Result"],[3,"Error"],[4,"ErrorKind"],[3,"Box"],[3,"Commitment"],[3,"Scalar"],[4,"Message"],[6,"MessageAndTarget"],[3,"XorName"],[15,"usize"],[3,"BTreeSet"],[15,"u64"],[3,"PublicKey"],[3,"PublicKeyShare"],[3,"String"],[3,"SignatureShare"],[3,"TypeId"],[3,"Outcome"],[4,"PartOutcome"],[13,"Serialization"],[13,"QuicP2P"],[13,"TooManyNonVoters"],[13,"UnexpectedPhase"],[13,"Valid"],[13,"Invalid"],[13,"Acknowledgment"],[13,"Initialization"],[13,"Proposal"],[13,"Complaint"],[13,"Justification"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
