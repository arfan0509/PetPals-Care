import pool from "../database/Database.js";
export const getAllhewan = async (req, res) => {
    try {
      const [rows] = await pool.query(
        "SELECT id_hewan, nama, jenis_hewan, gender, usia, warna, lokasi, tgl_publish, deskripsi, users_id_user,img_url FROM hewan"
      );
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const getAllDoctors = async (req, res) => {
    try {
      const [rows] = await pool.query(
        "SELECT id_dokter, nama, no_hp, email, gender, usia, alamat, spesialis, lulusan, biaya, pengalaman, url_foto FROM dokter"
      );
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  export const UploadHewan = async (req, res) => {
    if (req.method === 'POST') { // Memastikan metode request adalah POST
        // Ambil data dari body request
        const { nama, jenis_hewan, gender, usia, warna, lokasi, tgl_publish, deskripsi, users_id_user, img_url } = req.body;

    
        try {
          // Query untuk menyimpan data ke tabel 'hewan'
          const query = `

            INSERT INTO hewan (nama, jenis_hewan, gender, usia, warna, lokasi, tgl_publish, deskripsi, users_id_user, img_url)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);

          `;
          // Nilai yang akan disimpan, disusun sesuai dengan urutan kolom dalam query
          const values = [nama, jenis_hewan,  gender, parseInt(usia), warna, lokasi, (tgl_publish), deskripsi, parseInt(users_id_user), img_url];
    
          // Eksekusi query
          const [result] = await pool.execute(query, values);
    
          // Tutup koneksi setelah eksekusi query
        //   await pool.end();
    
          // Kembalikan respons sukses dengan data yang disimpan
          res.status(201).json({ id: result.insertId, ...req.body });
        } catch (error) {
          // Tutup koneksi jika terjadi kesalahan
        //   await pool.end();
          // Kembalikan respons error
          res.status(500).json({ error: 'Something went wrong', details: error.message });
        }
      } else {
        // Kembalikan respons jika metode request tidak diizinkan
        res.status(405).json({ message: 'Method not allowed' });
      }

  }

  // Handler untuk menangani request
