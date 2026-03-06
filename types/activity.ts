export interface Activity {
  id: string;
  judul: string;
  deskripsi: string;
  tanggal: string;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  gambar: string;
}
